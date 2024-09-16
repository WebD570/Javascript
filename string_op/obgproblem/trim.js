const questionAnswer = [
    {
      id: 1,
      question: "    coastal         State of India?",
      optionA: "      Maharashtra         ",
      optionB: "Haryana",
      answer: ["a", "b"],
    },
    {
      id: 2,
      question: "Asian     Country?",
      optionA: "India",
      optionB: "China",
      optionD: "russia",
      answer: ["a", "b"],
    },
    {
      id: 3,
      question: "Capital city of J&K?",
      optionA: "leh",
      optionB: "jammu",
      optionC: "Kargil",
      answer: ["b", "d"],
    },
    {
      id: 4,
      question: "City in Europe?",
      optionA: "London",
      optionC: "Delhi",
      optionD: "Ankara",
      answer: ["a"],
    },
  ]; 
 //new code  
const removeSpace = (str)=>{
const string = str.replace(/\s+/g, " ").trim()
const arr =string.split(" ")
const result = arr.map(w=>({
    return w[0].toUpperCase+w.subString(1).toLowerCase()
}))
return result;
}

  const trimData = questionAnswer.map(q => ({
    ...q,
    
    
    question: q.question ? q.question.removeSpace(): null,
    
    optionA: q.optionA ? q.optionA.trim() : null,
    optionB: q.optionB ? q.optionB.trim() : null,
    optionC: q.optionC ? q.optionC.trim() : null,
    optionD: q.optionD ? q.optionD.trim() : null,
  
    answer: q.answer.map(a => a.trim())
  }));


  
  console.log(trimData);
  