"use client";

import { experimental_useObject as useObject } from "@ai-sdk/react";
import { useState, useRef, useEffect } from "react";

import MessageRender from "@/components/component/MessageRender";
import TweetDemo from "@/components/component/TweetDemo";
import GenerateTweetButton from "@/components/component/GenerateTweetButton";
import ChatContainer from "@/components/component/ChatContainer";
import { LoadingState } from "@/lib/types";
import { topicSchema, tweetSchema } from "@/lib/schema";

export default function Chat() {
  const {
    isLoading: isLoadingTweet,
    object: tweets,
    submit: submitTweet,
  } = useObject({
    api: "/api/v1/tweets",
    schema: tweetSchema,
  });

  console.log(tweets);

  const { submit, object } = useObject({
    api: "/api/v1/topics",
    schema: topicSchema,
    onFinish: () => setIsLoading(LoadingState.TopicsReady),
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const [isLoading, setIsLoading] = useState<LoadingState>(LoadingState.Idle);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const onSubmitTopic = () => {
    setIsLoading(LoadingState.GeneratingTopics);
    submit("");
  };

  const onSubmit = (topic: string, type?: string): void => {
    if (type !== "refine") {
      setIsLoading(LoadingState.LoadingTweet);
    }
    submitTweet(topic);
  };

  return (
    <div className="grid grid-cols-2 grow px-4 py-4 gap-3 rounded-lg w-full h-full bg-gray-100 dark:bg-gray-900 ">
      <div>
        <TweetDemo>
          <MessageRender
            tweets={tweets?.text}
            isLoadingTweet={isLoadingTweet}
          />
        </TweetDemo>
      </div>
      <ChatContainer>
        <GenerateTweetButton
          onSubmitTopic={onSubmitTopic}
          onSubmit={onSubmit}
          topics={object?.ideas?.filter((idea) => idea !== undefined)}
          isLoading={isLoading}
        />
      </ChatContainer>
    </div>
  );
}
