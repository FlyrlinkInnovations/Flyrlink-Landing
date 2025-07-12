import { API_CONFIG } from '@/config/constants';

class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

export async function fetchWithErrorHandling(
  url: string,
  options?: RequestInit
): Promise<Response> {
  try {
    const response = await fetch(url, options);
    
    if (!response.ok) {
      throw new ApiError(
        response.status,
        `API request failed: ${response.statusText}`
      );
    }
    
    return response;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new Error('Network error occurred');
  }
}

export const blogApi = {
  async fetchPosts(page = 1, pageSize = 100) {
    const url = `${API_CONFIG.BLOG_API_URL}?page=${page}&page_size=${pageSize}&user_uid=${API_CONFIG.BLOG_USER_ID}`;
    const response = await fetchWithErrorHandling(url);
    return response.json();
  },
  
  getPostUrl(postId: string) {
    return `${API_CONFIG.BLOG_BASE_URL}${postId}`;
  }
};

export const waitingListApi = {
  async submit(data: {
    name: string;
    email: string;
    interest: string;
    companyName?: string;
    additionalInfo?: string;
  }) {
    const response = await fetchWithErrorHandling('/api/waiting-list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    return response.json();
  }
};