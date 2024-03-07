import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Issue {
  number: number;
  title: string;
  body: string;
  comments: number;
  created_at: string;
  html_url: string;
  user: {
    login: string;
  };
}

interface PostContextType {
  issues: Issue[];
  fetchIssue: (query?: string) => Promise<void>;
}

interface PostsProviderProps {
  children: ReactNode;
}

export const PostsContext = createContext({} as PostContextType);

export function PostsProvider({ children }: PostsProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([]);

  async function fetchIssue(searchQuery?: string) {
    let url = "repos/MilenaRizzi/github-blog/issues";
    console.log(searchQuery);
    if (searchQuery) {
      
      url = `search/issues?q=${encodeURIComponent(searchQuery)}+repo:MilenaRizzi/github-blog`;
    }

    const response = await api.get(url);
    const data = searchQuery ? response.data.items : response.data; 
    setIssues(data);
  }

  useEffect(() => {
    fetchIssue();
  }, []);

  return (
    <PostsContext.Provider value={{ issues, fetchIssue }}>{children}</PostsContext.Provider>
  );
}
