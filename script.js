/* the array which contions the quiz's questions along with their answer*/
const quizData = [
            {
                question: "What does HTML stand for?",
                options: ["HyperText Markup Language", "High-Level Text Management Language ","Hyperlink and Text Markup Language" ,"Home Tool Markup Language"],
                answer: "HyperText Markup Language"
            },
            {
                question: "Which tag is used to create a hyperlink?",
                options: ["<a>", "<link>", "<href>", "<hyberlink>"],
                answer: "<a>"
            },
            {
                question: " What is the purpose of the <head> tag in HTML?",
                options: ["Contains visible content of the page", "Defines the document's title and metadata", " Specifies the page's background color ", "Creates a horizontal line across the page"],
                answer: "Defines the document's title and metadata"
            },
            {
                question: "Which tag is used to create a numbered list?",
                options: ["<ul>", "<ol>", "<li>", "<nl>"],
                answer: "<ol>"
            },
            {
                question: "How do you add an image in HTML? ",
                options: ["<img>", "<image>", "<picture>", "<htmlimg>"],
                answer: "<img>"
            },
            {
                question: "What is the purpose of the <strong> tag?",
                options: ["To make text italic ", "To make text bold and important", " To create a line break "," To create a paragraph"],
                answer: "To make text bold and important"
            },
            {
                question:" Which tag is used to define a table row?",
                options:["<tr>","<td>","<th>","<table>"],
                answer:"<tr>"
            },
            {
                question:" What is the difference between <div>and < span> elements?",
                options:[ "<div>is block-level and <span> is inline","<div> is inline and <span> is block-level","Both are block-level","Both are inline"],
                answer:"<div>is block-level and <span> is inline"
            },
            {
                question:"How do you comment in HTML? ",
                options:["// comment","/* comment */","<!-- comment -->","`\** comment **\`"],
                answer:"<!-- comment -->"
            },
            {
                question:" What is the correct way to declare the document type in HTML5?",
                options:["<!DOCTYPE html>","<DOCTYPE html>","<!DOCTYPE HTML5>","<DOCTYPE HTML5>"],
                answer:"<!DOCTYPE html>"
            }
        ];
        var currentQuestion=0;
        var s=0;
        const questionEl = document.querySelector('.question');
        const optionsEl = document.querySelector('.options');
        const resultEl = document.querySelector('.result');
        const scoreEl = document.getElementById('score');
        // Function to load the question
        function loadQuiz() {
            if (currentQuestion >= quizData.length) {
                endQuiz();
                return;
            }

            const currentQuiz = quizData[currentQuestion];
            questionEl.textContent = currentQuiz.question;
            optionsEl.innerHTML = ''; // Clear previous options
            currentQuiz.options.forEach(option => {
                const button = document.createElement('button');
                button.classList.add('option');
                button.textContent = option;
                button.onclick = () => checkAnswer(option);
                optionsEl.appendChild(button);
            })
            ;
        }
        // Check the answer
        function checkAnswer(selectedOption) {
            if (selectedOption === quizData[currentQuestion].answer) {
                s++;
            }
            currentQuestion++;
            loadQuiz();
        }
        //End the quiz and show the results
        function endQuiz() {
            questionEl.style.display = 'none';
            optionsEl.style.display = 'none';
            resultEl.style.display = 'block';
            scoreEl.textContent = s;
        }
        // Initialize the quiz with the first question
        loadQuiz();