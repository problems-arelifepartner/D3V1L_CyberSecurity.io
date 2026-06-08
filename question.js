const quizQuestions = [
  {
    id: 1,
    question: "What is the primary difference between symmetric and asymmetric encryption?",
    options: [
      "Symmetric uses one key for encryption and decryption; asymmetric uses a public/private key pair.",
      "Asymmetric encryption is significantly faster than symmetric encryption.",
      "Symmetric encryption is only used for data at rest, while asymmetric is for data in transit.",
      "Symmetric encryption cannot be cracked, whereas asymmetric encryption can be."
    ],
    answer: 0
  },
  {
    id: 2,
    question: "Which of the following attacks exploits a trust relationship between a user's browser and a target website to execute unwanted actions?",
    options: [
      "Cross-Site Scripting (XSS)",
      "Cross-Site Request Forgery (CSRF)",
      "SQL Injection (SQLi)",
      "Man-in-the-Middle (MitM)"
    ],
    answer: 1
  },
  {
    id: 3,
    question: "During an incident response phase, what is the main purpose of 'Containment'?",
    options: [
      "To discover the root cause of the security breach.",
      "To completely remove the malware files from infected endpoints.",
      "To limit the scope and magnitude of the incident to prevent further damage.",
      "To restore systems back to normal business operations."
    ],
    answer: 2
  },
  {
    id: 4,
    question: "What does a 'Salt' add to a password hashing process to make it secure against rainbow tables?",
    options: [
      "A layer of symmetric encryption after hashing.",
      "A fixed string appended to all passwords before hashing.",
      "A unique, random string appended to each individual password before hashing.",
      "A compression algorithm that reduces password complexity."
    ],
    answer: 3
  },
  {
    id: 5,
    question: "In Active Directory environments, what type of attack targets the Kerberos ticket-granting service (TGS) to crack service account passwords offline?",
    options: [
      "Kerberoasting",
      "Pass-the-Hash",
      "Golden Ticket Attack",
      "AS-REP Roasting"
    ],
    answer: 0
  }
  // 💡 To hit 100 questions, add objects 6 through 100 following the exact format above.
];
