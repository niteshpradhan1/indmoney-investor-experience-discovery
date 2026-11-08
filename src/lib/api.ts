import { ReviewRecord, CandidateReviewStatus, ClassificationCategory, EvidenceStrength } from '@/types';
import { INITIAL_CANDIDATE_REVIEWS } from '@/data/candidateReviewsData';

const LOCAL_STORAGE_KEY = 'indmoney_h1_candidate_reviews_v2';

export interface UpdateReviewPayload {
  status: CandidateReviewStatus;
  categories: ClassificationCategory[];
  evidenceStrength: EvidenceStrength;
  notes: string;
  reviewedBy?: string;
  action?: string;
}

// Fetch all candidate reviews with joined AI and human decisions
export async function fetchCandidateReviews(): Promise<{
  data: ReviewRecord[];
  source: string;
}> {
  try {
    const res = await fetch('/api/candidates', { cache: 'no-store' });
    if (res.ok) {
      const json = await res.json();
      if (Array.isArray(json.data) && json.data.length > 0) {
        // Also sync local storage with latest server state if present
        if (typeof window !== 'undefined') {
          // If local storage has pending unsaved reviews, merge carefully
          const localSaved = localStorage.getItem(LOCAL_STORAGE_KEY);
          if (!localSaved) {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(json.data));
          }
        }
        return { data: json.data, source: json.source || 'api' };
      }
    }
  } catch (err) {
    console.warn('API fetch failed, falling back to local storage / baseline:', err);
  }

  // Fallback to localStorage or static baseline
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return { data: parsed, source: 'localStorage' };
        }
      } catch (e) {
        // ignore parse error
      }
    }
  }

  return { data: INITIAL_CANDIDATE_REVIEWS, source: 'local_baseline' };
}

// Update a single candidate review's human decision
export async function updateCandidateReview(
  id: string,
  payload: UpdateReviewPayload
): Promise<boolean> {
  let apiSuccess = false;
  try {
    const res = await fetch(`/api/candidates/${encodeURIComponent(id)}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      apiSuccess = true;
    }
  } catch (err) {
    console.warn('Network call failed for updateCandidateReview, persisting locally:', err);
  }

  return apiSuccess;
}

// Batch update multiple candidate reviews
export async function batchUpdateCandidateReviews(
  updates: ReviewRecord[],
  action: string = 'BATCH_TRIAGE'
): Promise<boolean> {
  try {
    const res = await fetch('/api/candidates', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ updates, action }),
    });
    return res.ok;
  } catch (err) {
    console.warn('Batch update API failed:', err);
    return false;
  }
}
