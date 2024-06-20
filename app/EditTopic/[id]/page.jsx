"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import EditTopicForm from "@/components/EditTopicForm";

export default function EditTopic({ params }) {
  const [topic, setTopic] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = params;
  const router = useRouter();

  useEffect(() => {
    const fetchTopicById = async () => {
      try {
        const res = await fetch(`/api/topics/${id}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch topic");
        }

        const data = await res.json();
        setTopic(data.topic);
      } catch (error) {
        console.error("Error loading topic:", error);
        setError("Failed to load topic");
      } finally {
        setLoading(false);
      }
    };

    fetchTopicById();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!topic) {
    return <div>No topic found.</div>;
  }

  return <EditTopicForm id={id} title={topic.title} description={topic.description} />;
}
