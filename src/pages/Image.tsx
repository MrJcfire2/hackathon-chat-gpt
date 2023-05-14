import { FormEvent, useState } from "react";
import { generateImage } from "../hooks/image";
import { ImagesResponseDataInner } from "openai";

function Image() {
  const [message, setMessage] = useState<string>();
  const [imageSrcs, setImageSrcs] = useState<ImagesResponseDataInner[]>();
  const [allowUserMessage, setAllowUserMessage] = useState(true);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAllowUserMessage(false);
    // setLoadingResponse(true);
    console.log("false");

    if (!message) return;
    console.log("true");
    generateImage({ prompt: message })
      .then((response) => {
        if (response.data.data) setImageSrcs(response.data.data);
      })
      .finally(() => {
        // setLoadingResponse(false);
        setAllowUserMessage(true);
      });
    setMessage(undefined);
  };
  return (
    <>
      <div className="mb-5 space-y-3 overflow-y-scroll h-[calc(100vh_-_180px)]">
        {imageSrcs?.map((imgSrc) => (
          <img src={imgSrc.url} width={256} height={256} />
        ))}
      </div>
      <form onSubmit={submit} className="flex align-center space-x-2">
        <input
          type="text"
          name="promp"
          placeholder="Type a prompt to generate image"
          className="rounded-lg flex-grow dark:bg-gray-800 focus:ring-2"
          onChange={(e) => setMessage(e.target.value)}
          value={message ?? ""}
        />
        <button
          type="submit"
          className="bg-blue-500 rounded-lg px-5 py-2 transition-colors disabled:bg-blue-900 disabled:text-gray-500 disabled:cursor-not-allowed"
          disabled={!allowUserMessage || Boolean(!message)}
        >
          Send
        </button>
      </form>
    </>
  );
}

export default Image;
