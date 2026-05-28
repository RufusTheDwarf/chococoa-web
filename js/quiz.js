/* ===== QUIZ CHOCOCOA-WEB ===== */
const quizData = {
    origine: {
        title: "Origines du Chocolat",
        description: "Remontez aux sources du cacao depuis l'Amérique centrale jusqu'à votre tablette.",
        questions: [
            {
                question: "Quelle civilisation a consommé du chocolat en premier ?",
                answers: ["Les Mayas", "Les Romains", "Les Égyptiens", "Les Grecs"],
                correct: 0,
                anecdote: "Les Mayas considéraient le cacao comme un don des dieux et l'utilisaient dans leurs rituels sacrés."
            },
            {
                question: "Sous quelle forme buvait-on le chocolat à l'origine ?",
                answers: ["En boisson froide et amère", "En tablette sucrée", "En poudre mélangée à du lait", "En sirop chaud"],
                correct: 0,
                anecdote: "Le xocolatl, boisson des Aztèques, était froid, amer et épicé — rien à voir avec notre chocolat chaud !"
            },
            {
                question: "Qui a ramené le cacao en Europe pour la première fois ?",
                answers: ["Hernán Cortés", "Christophe Colomb", "Vasco de Gama", "Fernand Magellan"],
                correct: 0,
                anecdote: "Cortés découvrit le cacao lors de sa conquête du Mexique et l'introduisit à la cour d'Espagne en 1528."
            },
            {
                question: "Dans quel pays a été créée la première tablette de chocolat solide ?",
                answers: ["En Angleterre", "En Suisse", "En Belgique", "En France"],
                correct: 0,
                anecdote: "C'est la maison Fry & Sons à Bristol qui fabriqua la première tablette solide en 1847."
            }
        ]
    },
    saveurs: {
        title: "Saveurs & Accords",
        description: "Explorez l'art de la dégustation et les mariages qui font fondre les palais.",
        questions: [
            {
                question: "Quelle est la teneur minimale en cacao du chocolat noir ?",
                answers: ["50%", "35%", "70%", "85%"],
                correct: 0,
                anecdote: "En Europe, un chocolat doit contenir au moins 35% de cacao pour être appelé 'chocolat noir', mais les connaisseurs préfèrent souvent 70% et plus."
            },
            {
                question: "Quel fruit se marie le mieux avec le chocolat noir selon les experts ?",
                answers: ["La framboise", "La banane", "Le kiwi", "L'ananas"],
                correct: 0,
                anecdote: "L'acidité de la framboise équilibre parfaitement l'amertume du chocolat noir — un classique de la gastronomie."
            },
            {
                question: "Comment s'appelle la variété de cacao la plus rare et la plus aromatique ?",
                answers: ["Criollo", "Forastero", "Trinitario", "Nacional"],
                correct: 0,
                anecdote: "Le Criollo représente moins de 5% de la production mondiale mais offre des arômes d'une finesse exceptionnelle."
            },
            {
                question: "À quelle température le chocolat commence-t-il à fondre ?",
                answers: ["37°C", "20°C", "50°C", "45°C"],
                correct: 0,
                anecdote: "Le beurre de cacao fond à 37°C — exactement la température du corps humain ! C'est pourquoi le chocolat fond littéralement dans la bouche."
            }
        ]
    },
    bienfaits: {
        title: "Bienfaits du Chocolat",
        description: "Découvrez les vraies vertus santé de votre péché mignon préféré.",
        questions: [
            {
                question: "Quelle molécule du chocolat contribue à améliorer l'humeur ?",
                answers: ["La sérotonine", "L'insuline", "L'adrénaline", "La mélatonine"],
                correct: 0,
                anecdote: "Le chocolat stimule la production de sérotonine et contient du tryptophane, son précurseur — une véritable cure de bonheur naturelle."
            },
            {
                question: "Le chocolat noir aide à protéger quel organe vital ?",
                answers: ["Le cœur", "Le foie", "Les reins", "Les poumons"],
                correct: 0,
                anecdote: "Les flavonoïdes du cacao réduisent la pression artérielle et améliorent la circulation sanguine, protégeant ainsi le système cardiovasculaire."
            },
            {
                question: "Quelle substance du cacao est surnommée 'molécule du bonheur' ?",
                answers: ["L'anandamide", "La dopamine", "L'endorphine", "La cortisone"],
                correct: 0,
                anecdote: "L'anandamide (du sanskrit ānanda, 'béatitude') est produit naturellement par le cerveau et se retrouve dans le cacao — c'est notre légère euphorie post-chocolat !"
            },
            {
                question: "Quel nutriment du chocolat noir améliore la mémoire ?",
                answers: ["Les flavonoïdes", "Le calcium", "La vitamine C", "Le fer"],
                correct: 0,
                anecdote: "Des études de l'Université Columbia montrent que les flavonoïdes du cacao améliorent les fonctions cognitives et la mémoire à court terme."
            }
        ]
    },
    recettes: {
        title: "Recettes & Création",
        description: "Testez vos connaissances culinaires autour du chocolat artisanal.",
        questions: [
            {
                question: "Qu'est-ce que le tempérage du chocolat ?",
                answers: ["Contrôler sa température pour un résultat brillant", "Le faire fondre au micro-ondes", "L'additionner de crème", "Le mélanger avec du sucre glace"],
                correct: 0,
                anecdote: "Le tempérage consiste à faire passer le chocolat par des paliers de température précis pour stabiliser les cristaux de beurre de cacao — secret d'une tablette brillante et qui croque."
            },
            {
                question: "Quel ingrédient rend une ganache plus légère et aérienne ?",
                answers: ["La crème fouettée", "L'eau gazeuse", "Le beurre de cacao", "Le lait concentré"],
                correct: 0,
                anecdote: "Incorporer de la crème fouettée dans une ganache crée une texture mousseuse qui allège les truffes et les entremets au chocolat."
            },
            {
                question: "Combien de fèves de cacao faut-il en moyenne pour une tablette de 100g ?",
                answers: ["Entre 400 et 450 fèves", "Environ 50 fèves", "Environ 100 fèves", "Plus de 1000 fèves"],
                correct: 0,
                anecdote: "Il faut en réalité entre 400 et 450 fèves fermentées, séchées, torréfiées et broyées pour obtenir une seule tablette de 100g — un vrai trésor !"
            },
            {
                question: "Quelle épice complète traditionnellement le chocolat chaud mexicain ?",
                answers: ["La cannelle et le piment", "Le cumin", "La vanille seule", "Le poivre noir"],
                correct: 0,
                anecdote: "Les Aztèques assaisonnaient leur xocolatl de piment, cannelle et vanille. Cette tradition perdure dans le chocolat chaud mexicain appelé 'champurrado'."
            }
        ]
    }
};

let currentCategory = null;
let currentQuestion = 0;
let score = 0;
let answered = false;
const wrongAnswers = [];

// DOM refs
const quizContainer = document.getElementById('quiz-container');
const quizSummary = document.getElementById('quiz-summary');
const quizTitle = document.getElementById('quiz-title');
const quizDesc = document.getElementById('quiz-description');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const answersDiv = document.getElementById('answers');
const nextBtn = document.getElementById('next-button');
const resultScore = document.getElementById('result-score');
const resultText = document.getElementById('result-text');
const resultDetail = document.getElementById('result-detail');
const restartBtn = document.getElementById('restart-button');
const returnBtn = document.getElementById('return-button');

// Category buttons
document.querySelectorAll('.quiz-category').forEach(btn => {
    btn.addEventListener('click', () => {
        currentCategory = btn.dataset.category;
        startQuiz();
    });
});

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    answered = false;
    wrongAnswers.length = 0;

    const data = quizData[currentCategory];
    quizTitle.textContent = data.title;
    quizDesc.textContent = data.description;

    quizContainer.classList.remove('hidden');
    quizSummary.classList.add('hidden');
    nextBtn.classList.add('hidden');

    showQuestion();
    quizContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showQuestion() {
    const data = quizData[currentCategory];
    const q = data.questions[currentQuestion];
    answered = false;

    questionNumber.textContent = `Question ${currentQuestion + 1} / ${data.questions.length}`;
    questionText.textContent = q.question;
    answersDiv.innerHTML = '';
    nextBtn.classList.add('hidden');

    q.answers.forEach((ans, i) => {
        const btn = document.createElement('button');
        btn.className = 'answer-button';
        btn.textContent = ans;
        btn.addEventListener('click', () => selectAnswer(i));
        answersDiv.appendChild(btn);
    });
}

function selectAnswer(index) {
    if (answered) return;
    answered = true;

    const data = quizData[currentCategory];
    const q = data.questions[currentQuestion];
    const buttons = answersDiv.querySelectorAll('.answer-button');

    buttons.forEach(btn => btn.disabled = true);

    if (index === q.correct) {
        buttons[index].classList.add('correct');
        score++;
    } else {
        buttons[index].classList.add('wrong');
        buttons[q.correct].classList.add('correct');
        wrongAnswers.push({ question: q.question, anecdote: q.anecdote });
    }

    nextBtn.classList.remove('hidden');
}

nextBtn.addEventListener('click', () => {
    const data = quizData[currentCategory];
    currentQuestion++;

    if (currentQuestion < data.questions.length) {
        showQuestion();
    } else {
        showSummary();
    }
});

function showSummary() {
    quizContainer.classList.add('hidden');
    quizSummary.classList.remove('hidden');

    const total = quizData[currentCategory].questions.length;
    resultScore.textContent = `Votre score : ${score} / ${total}`;

    let msg;
    if (score === total) msg = "Parfait ! Vous êtes un vrai expert du chocolat !";
    else if (score >= total * 0.75) msg = "Excellent ! Le chocolat n'a presque plus de secrets pour vous.";
    else if (score >= total * 0.5) msg = "Pas mal ! Vous connaissez bien le chocolat.";
    else msg = "Il faut encore un peu pratiquer... en dégustant !";

    resultText.textContent = msg;

    if (wrongAnswers.length > 0) {
        resultDetail.innerHTML = "<strong>À retenir :</strong><br>" +
            wrongAnswers.map(w => `• ${w.anecdote}`).join('<br>');
    } else {
        resultDetail.textContent = "Toutes les réponses étaient correctes — impressionnant !";
    }

    quizSummary.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

restartBtn.addEventListener('click', () => {
    startQuiz();
});

returnBtn.addEventListener('click', () => {
    quizContainer.classList.add('hidden');
    quizSummary.classList.add('hidden');
    document.querySelector('.section-wrapper').scrollIntoView({ behavior: 'smooth' });
});
