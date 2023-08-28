import { ref } from 'vue';

// Função para obter o valor de isLogged do localStorage
const getStoredIsLogged = () => {
  const storedValue = localStorage.getItem('isLogged');
  return storedValue ? JSON.parse(storedValue) : false;
};

// Crie uma variável reativa para armazenar o valor de isLogged
const isLogged = ref(getStoredIsLogged());

// Função para atualizar o valor de isLogged e o localStorage
const updateIsLogged = (value) => {
  isLogged.value = value;
  localStorage.setItem('isLogged', JSON.stringify(value));
};

// Manipule o evento de fechamento da janela para salvar isLogged
window.addEventListener('beforeunload', () => {
  localStorage.setItem('isLogged', JSON.stringify(isLogged.value));
});

export { isLogged, updateIsLogged };