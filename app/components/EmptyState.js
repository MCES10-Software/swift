export default function EmptyState({ setOpen, setPrompt }) {
  return (
    <div className="mt-12 sm:mt-24 space-y-6 text-white text-base mx-8 sm:mx-4 sm:text-2xl leading-12 bg-teal-800 rounded-md py-5 px-5 mb-12 ">
      <p>
        Ricky AI is a fine tuned model of Mistral 8x7B which is a high-quality mixture of experts model with open
        weights, created by Mistral AI.
        It outperforms Llama 2 70B on most benchmarks with 6x faster
        inference, and matches or outputs GPT3.5 on most benchmarks.{" "}
      </p>

      <p>Try RickyAI</p>
    </div>
  );
}
