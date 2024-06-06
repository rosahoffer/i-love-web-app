<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        comment: ''
      },
      isSubmitting: false,
      submissionError: null,
      submissionSuccess: false
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true;
      try {
        const response = await fetch('https://api-eu-west-2.hygraph.com/v2/clpceledoaa4y01unccm36p1r/master', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MTc2OTE2MzQsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2xwY2VsZWRvYWE0eTAxdW5jY20zNnAxci9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiZjdjNDJiZjQtMTVmMS00NDk5LWJmOWMtZDIzNGE3NmI3YzI2IiwianRpIjoiY2x4M2g4emZwcm82MzA3bXBnNGNmOWNhZCJ9.Wdggbwevif2CCIKFrlOVKZeiHWR7g983BqNy3Eg5QM-D5xxxR-o2I9c4uLZvxQJO1RYgVbpaDxQYMxJH7DwggQG9p9OcS9ZVPxmtGTSoZCJajV90vJ7Ivh54-Wpi3eXDuF1n5BHafmutcwrbwgbW-s6Xwn6_NcRs00DtkDEq5oL6PtD8vcg0QMO28PzrpAPj7sWvrTYDZCtkGAzV-UjQq9GdkDR1WBws9sRlZd7QBLd7agpzgVjh-MIfGXFPwy9Z4sFYwt0PJZ2dcj6DcSJULLU0R9w8qAURV4Ev91xJ8rve3ZzCrCQT4Jrllv3Bq1G0ehrjgh1FiWoXbzdtzozhAIKtoZkTVbv_iR6vdN4GnTTPufK-Z5pqROVS22eAuRrV1Z-_9utouVl2YAY41kA431bYwDrlPtyt9h41S4PcFB3VPewgucbmNwdoCL-uuPjNbMnZ2G4XZR2mYbROcTYrFC_Abp-M66pRP80AKrN96ZQCClXwIGRrLqsATX8hqAPZbVFBQCfNB6DAxe0ZKLr5Gpq3586_iOpUV0F9QJjfXh46SDAo-Ol9N7oDOlr05IlPJMMUWpcGkacMTqKCBgKRoQTmSPHACqMLNCCeliaZOxgKgk7ezpGLQS4C8szVCp6ZJVfTnshajwRwLvnLLMlVewXHCqy2HdebeV9U8dKPx14'
          },
          body: JSON.stringify({
            query: `
            mutation MyMutation {
              createComment(data: {
                name: "${this.formData.name}",
                email: "${this.formData.email}",
                comment: "${this.formData.comment}"
              }) {
                id
                name
                email
                comment
              }
            }`,
            variables: {
              data: this.formData
            }
          })
        });

        if (response.ok) {
          const responseData = await response.json();
          console.log('Formulier verzonden:', responseData.data.createComment);
          this.submissionSuccess = true;
          this.resetForm();
          setTimeout(() => {
            this.isSubmitting = false;
          }, 2000);
        } else {
          console.error('Fout bij het verzenden van het formulier:', response.statusText);
          console.log('Response status code:', response.status);
          this.submissionError = response.statusText;
        }
      } catch (error) {
        console.error('Fout bij het verzenden van het formulier:', error);
        this.submissionError = 'Er is een fout opgetreden bij het verzenden van het formulier.';
      } finally {
        this.isSubmitting = false;
      }
    },
    resetForm() {
      this.formData.name = '';
      this.formData.email = '';
      this.formData.comment = '';
    }
  }
}
</script>

<template>
    <main>
        <div>
            <h2 class="blog-introduction">De Commentaren <span>hoek</span></h2>
            <p>Deel je gedachten, ideeën en reacties!</p>
            <form @submit.prevent="submitForm">
                <div>
                    <label for="name">Naam</label>
                    <input type="text" id="name" v-model="formData.name" required aria-label="Naam" placeholder="Vul hier uw naam in...">
                </div>
                <div>
                    <label for="email">E-mail</label>
                    <input type="email" id="email" v-model="formData.email" required aria-label="E-mail" placeholder="Vul hier uw e-mailadres in...">
                </div>
                <div>
                    <label for="comment">Plaats een reactie</label>
                    <textarea id="comment" v-model="formData.comment" required aria-label="Plaats een reactie" placeholder="Schrijf hier uw reactie..."></textarea>
                </div>
                <div class="submit-section">
                    <button class="secondary-button" type="submit" :disabled="isSubmitting" v-if="!isSubmitting">Verzenden</button>
                    <div class="loading-section" v-if="isSubmitting">
                        <div class="spinner"></div>
                        <span class="loading-text">Aan het verzenden...</span>
                    </div>
                </div>
            </form>
        
            <div v-if="submissionError" class="error-message">{{ submissionError }}</div>
            <div v-if="submissionSuccess" class="success-message">Uw reactie is succesvol verzonden!</div>
        </div>
    </main>
</template>


<style scoped>

:root {
  --primary-color: #F0EDF3;
  --secondary-color: #AE8FD4;
  --tertiary-color: #EACFFF;
  --font-color: #5B5368;
}

main{
  padding: 5rem 0;
  max-width: 50rem;
}

.blog-introduction{
  margin: auto;
}

h2{
  font-size: 3rem;
  font-weight: 900;
  font-style: italic;
  letter-spacing: -2px;
  color: var(--font-color);
  line-height: 3rem;
  text-align: left;
}

/* FORM STYLES  */

form {
  margin-top: 2rem;
}

form label {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--font-color);
  letter-spacing: -1px;
}

form input,
form textarea {
  width: 100%;
  padding: 1rem;
  margin-top: 0.5rem;
  border: 2px solid var(--font-color);
  border-radius: 15px;
  background-color: var(--background-color);
  margin-bottom: 1rem;
}

/* LOADING STATE  */

@keyframes spin {
  to { transform: rotate(360deg); }
}

.spinner {
  display: inline-block;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-top-color: var(--font-color);
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: spin 1s linear infinite;
}

.submit-section {
  display: flex;
  align-items: center;
}

.loading-section {
  display: flex;
  align-items: center;
  margin-left: 1rem;
}

.loading-text {
  margin-left: 0.5rem;
}

/* SUCCES EN ERROR  */

.error-message{
  margin-top: 1rem;
  color:  var(--font-color);
}

.success-message {
  margin-top: 1rem;
  color: var(--secondary-color);
}

</style>
