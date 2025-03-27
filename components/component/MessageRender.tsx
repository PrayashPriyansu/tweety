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
      <div className="text-stone-300">
        <p>Please wait, generating your tweet...</p>
      </div>
    );

  if (!tweets || tweets.length === 0) {
    return; // Return null if messages is empty or undefined
  }

  return (
    <div className="text-stone-100 mt-2">
      <MessageChunk tweets={tweets} />
    </div>
  );
}

export default MessageRender;
