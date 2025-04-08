import MessageChunk from "./MessageChunk";

function MessageRender({
  tweets,
  isLoadingTweet,
}: Readonly<{
  tweets: string | undefined;
  isLoadingTweet: boolean;
}>) {
  if (isLoadingTweet === true)
    return (
      <div className="text-gray-400">
        <p>Please wait, generating your tweet...</p>
      </div>
    );

  if (!tweets || tweets.length === 0) {
    return;
  }

  return (
    <div className="text-gray-200 mt-2">
      <MessageChunk tweets={tweets} />
    </div>
  );
}

export default MessageRender;
