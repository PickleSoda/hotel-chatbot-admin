import { useState, useEffect, FormEvent } from 'react';

interface QnA {
  id: number;
  question: string;
  answer: string;
}

const Chat = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [qnas, setQnas] = useState<QnA[]>([]);

  useEffect(() => {
    const fetchQnas = async () => {
      const res = await fetch('/api/qna');
      const data = await res.json();
      setQnas(data);
    };

    fetchQnas();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/qna', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question: query, answer: '' }), // Assume the answer is empty for now
    });

    const data = await res.json();
    setQnas([...qnas, data]);
    setQuery('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask me anything..."
        />
        <button type="submit">Send</button>
      </form>
      {qnas.map((qna) => (
        <p key={qna.id}>
          Q: {qna.question}
          <br />
          A: {qna.answer}
        </p>
      ))}
    </div>
  );
};

export default Chat;
