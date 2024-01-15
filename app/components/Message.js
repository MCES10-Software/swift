const Message = ({ message, isUser }) => {
  let containerClass = "bg-teal-800";
  if (isUser) {
    containerClass = "";
  }

  if (Array.isArray(message)) {
    message = message.join("");
  }

  if (!message || message === "") {
    return null;
  }

  return (
    <div
      className={`flex gap-x-4 rounded-md ${containerClass} py-5 px-5 mb-12 text-white bg-teal-800`}
    >
      {isUser ? (
        <span className="text-xl sm:text-2xl" title="user">
          User
        </span>
      ) : (
        <span className="text-xl sm:text-2xl" title="AI">
          <img
            className="h-6 w-6"
            src="/static/ricky.png"
            alt="ricky"
          />
        </span>
      )}

      <div className="flex flex-col text-sm sm:text-base flex-1 gap-y-4 mt-1">
        {message.split("\n").map(
          (text, index) =>
            text.length > 0 && (
              <span key={index} className="min-w-0">
                {text}
              </span>
            )
        )}
      </div>
    </div>
  );
};

export default Message;
