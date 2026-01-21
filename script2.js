// Comments data
const comments = [
    {
      text: "I caught my GF cheating. I will employ this hacker again (he is my private detective)",
      author: "VlAMeN847",
    },
    {
      text: "Russiandby00 hacked gmail account from my ex-boyfriend! He gave me the few tips too on How it works to keep my account secure",
      author: "_mindURbuslne5528",
    },
    {
      text: "I have my credit score fixed, and boosted to 810. I can't believe. We got the loan. Great work",
      author: "_DreamHome01",
    },
    {
      text: "He doesn't talk much but OR Boy! He delivers. I now monitor my partner's phone 24/7",
      author: "_CrazyBestieChelle",
    },
    {
      text: "I have a bachelor of science in Biology now. Thanks to HLst... will order again",
      author: "_MahtaBill",
    },
    {
      text: "I was mugged, cheated by two other sites. I thought it's impossible but userfA from you site did it. Grateful.",
      author: "_BraveHeart55",
    },
  ]
  
  // Initialize on page load
  document.addEventListener("DOMContentLoaded", () => {
    displayRandomComment()
    setupFAQ()
    setupFloatingCommentClose()
  })
  
  function displayRandomComment() {
    const randomIndex = Math.floor(Math.random() * comments.length)
    const randomComment = comments[randomIndex]
  
    document.getElementById("floating-text").textContent = `"${randomComment.text}"`
    document.getElementById("floating-author").textContent = `- ${randomComment.author}`
  }
  
  function setupFAQ() {
    const faqToggles = document.querySelectorAll(".faq-toggle")
  
    faqToggles.forEach((toggle) => {
      toggle.addEventListener("click", function () {
        const faqItem = this.parentElement
        faqItem.classList.toggle("active")
  
        // Close other FAQs when opening a new one
        faqToggles.forEach((otherToggle) => {
          if (otherToggle !== toggle) {
            otherToggle.parentElement.classList.remove("active")
          }
        })
      })
    })
  }
  
  function setupFloatingCommentClose() {
    const closeBtn = document.getElementById("close-floating")
    const floatingComment = document.getElementById("floating-comment")
  
    closeBtn.addEventListener("click", () => {
      floatingComment.classList.add("hide")
      setTimeout(() => {
        floatingComment.style.display = "none"
      }, 400)
    })
  }
  
  // Smooth scroll for any anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({ behavior: "smooth" })
      }
    })
  })
  