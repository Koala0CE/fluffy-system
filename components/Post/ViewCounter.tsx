"use client";

import { createClient } from "@/app/utils/supabase/client";
import React, { useState, useEffect } from "react";

interface ViewCount {
  count: number;
}

interface ViewCounterProps {
  slug: string;
  noCount?: boolean;
  showCount?: boolean;
}

const ViewCounter: React.FC<ViewCounterProps> = ({
  slug,
  noCount = false,
  showCount = true,
}) => {
  const [views, setViews] = useState<number>(0);
  const supabase = createClient();

  useEffect(() => {
    const incrementView = async () => {
      console.log("Incrementing view count");
      try {
        let { error } = await supabase.rpc("increment", {
          slug_text: slug,
        });
        if (error) {
          console.error("Error incrementing view count inside try block", error);
        }
      } catch (error) {
        console.error("Error incrementing view count", error);
      }
    };
    if (!noCount) incrementView();
  }, [slug, noCount]);

  useEffect(() => {
    const getViews = async () => {
      console.log("Fetching view count");
      try {
        let { data, error } = await supabase
          .from('views')
          .select('count')
          .match({ slug })
          .single();

        if (error) {
          console.error("Error fetching view count", error);
        } else {
          setViews(data ? data.count : 0);
        }
      } catch (error) {
        console.error("Error fetching view count", error);
      }
    };
    getViews();
  }, [slug]);

  if (showCount) {
    return <span>{views} views</span>;
  } else {
    return null;
  }
};

export default ViewCounter;
