"use client";

import { createClient } from "@/utils/supabase/client";
import React, { useState, useEffect } from "react";
import 

const supabase = createClientComponentClient();

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

  useEffect(() => {
    const incrementView = async () => {
      try {
        let { error } = await supabase.rpc("increment", {
          slug_text: slug,
        });
        if (error)
          console.error(
            "Error incrementing view count inside try block",
            error
          );
      } catch (error) {
        console.error("Error incrementing view count", error);
      }
    };
    if (!noCount) incrementView();
  }, [slug, noCount]);

  if (showCount) {
    return <span>{views} views</span>;
  } else {
    return null;
  }
};

export default ViewCounter;
