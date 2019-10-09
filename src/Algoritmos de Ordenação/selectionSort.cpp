#include <iostream>
using std::cout;
using std::endl;

void troca(int *n1 , int *n2){
    int temp = 0;
    temp = *n1;
    *n1 = *n2;
    *n2 = temp;

}

void selectionSort(int v[], int n){
    int i, j, menor_indice;

    for(i = 0; i < n - 1; i++){
        menor_indice = i;
        for(j = i + 1; j < n; j++){
            if(v[j] < v[menor_indice])
                menor_indice = j;

        }
        troca(&v[menor_indice], &v[i]);
    }

}

void imprimeVetor(int v[], int tam){
    for(int i = 0; i < tam; i++)
        cout << v[i] << " ";
    cout << endl;
}

int main() {
    int v[] = {15, 98, 12, 45, 1, 69, 0};
    int n = sizeof(v)/ sizeof(v[0]);

    selectionSort(v, n);

    cout << "Vetor Ordenado: " << endl;
    imprimeVetor(v, n);

    return 0;
}