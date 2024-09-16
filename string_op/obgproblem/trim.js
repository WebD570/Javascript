const questionAnswer = [
    {
      id: 1,
      question: "   Coastal State of India?",
      optionA: "   Maharashtra",
      optionB: "Haryana",
      optionC: "Null",
      answer: ['a', 'b'],
    }, 
  ];
  
  
  const trimData = questionAnswer.map(q => ({
    ...q,
    question: q.question.trim(),
    optionA: q.optionA?.trim(),
    optionB: q.optionB?.trim(),
    optionC:q.optionC?.trim(),  
    answer: q.answer.map(a => a.trim())
  }));
  
  console.log(trimData);