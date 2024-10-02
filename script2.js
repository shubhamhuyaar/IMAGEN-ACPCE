async function query(data) {
  const response = await fetch(
      "https://api-inference.huggingface.co/models/Gustavosta/MagicPrompt-Stable-Diffusion",
      {
          headers: { Authorization: "Bearer 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" },
          method: "POST",
          body: JSON.stringify(data),
      }
  );
  const result = await response.json();
  return result;
}

async function submitText() {
  const inputText = document.getElementById("inputText").value.trim();
  if (inputText === "") {
      alert("Please enter some text.");
      return;
  }

  const submitButton = document.querySelector(".chat-button");
  submitButton.disabled = true; // Disable the button

  try {
      const response = await query({ "inputs": inputText });
      displayResponse(response);
  } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred while processing your request.");
  } finally {
      submitButton.disabled = false; // Enable the button
  }
}


function displayResponse(response) {
  const generatedText = response[0].generated_text;
  const responseContainer = document.getElementById("responseContainer");
  responseContainer.innerHTML = `
      <div class="generated-text">${generatedText}</div>
      
  `;
}

