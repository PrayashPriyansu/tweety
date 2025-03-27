"use client";

export enum LoadingState {
  Idle = "idle",
  GeneratingTopics = "generatingTopics",
  TopicsReady = "topicsReady",
  LoadingTweet = "loadingTweet",
  TweetReady = "tweetReady",
}
import {
  useAssistant,
  useChat,
  experimental_useObject as useObject,
} from "@ai-sdk/react";
import { useState, useRef, useEffect, use } from "react";
import { Send, User, Bot, Dot, Ellipsis, Loader2 } from "lucide-react";

import Image from "next/image";
import MessageRender from "@/components/component/MessageRender";
import TweetDemo from "@/components/component/TweetDemo";
import GenerateTweetButton from "@/components/component/GenerateTweetButton";
import ChatContainer from "@/components/component/ChatContainer";
import { TextStreamPart } from "ai";
import { topicSchema } from "../../api/v1/topics/route";
import { tweetSchema } from "../../api/v1/tweets/route";

const userName = "John Doe";

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
    onFinish: (data) => setIsLoading(LoadingState.TopicsReady),
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
