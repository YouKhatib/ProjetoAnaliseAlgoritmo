#include<iostream>

using std::cout;
using std::cin;
using std::endl;

void imprimeVetor(int v[], int tam) {
   for(int i = 1; i <= tam; i++)
      cout << v[i] << " ";
   cout << endl;
   
}

int getMax(int v[], int tam) {
   int max = v[1];
   for(int i = 2; i <= tam; i++) {
      if(v[i] > max)
         max = v[i];
   }
   return max; 
   
}

void countingSort(int v[], int tam) {
   int output[tam + 1];
   int max = getMax(v, tam);
   int count[max + 1];    
   
   for(int i = 0; i <= max; i++)
      count[i] = 0;     
   
   for(int i = 1; i <= tam; i++)
      count[v[i]]++;     
   
   for(int i = 1; i <= max; i++)
      count[i] += count[i-1];     
   
   for(int i = tam; i >= 1; i--) {
      output[count[v[i]]] = v[i];
      count[v[i]] -= 1; 
      
   }
   
   for(int i = 1; i <= tam; i++) 
      v[i] = output[i]; 
   
}

int main() {
   int n;
   cout << "Digite o numero de elementos do vetor: ";
   cin >> n;
   int v[n + 1];       
   
   cout << "Digite os elementos:" << endl;
   for(int i = 1; i <= n; i++) 
      cin >> v[i];
   
   cout << "O vetor antes de ser ordenado: ";
   imprimeVetor(v, n);
   
   countingSort(v, n);
   
   cout << "O vetor depois de ser ordenado: ";
   imprimeVetor(v, n);
   
}
