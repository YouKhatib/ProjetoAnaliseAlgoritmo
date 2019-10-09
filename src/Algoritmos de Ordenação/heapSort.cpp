#include <iostream>

using std::cout;
using std::endl;

void troca(int *a, int *b){
    int temp;
    temp = *a;
    *a = *b;
    *b = temp;

}

void imprimeVetor(int v[], int n){
    for(int i = 0; i < n; i++)
        cout << v[i] << " ";
    cout << endl;
}

void sift(int v[], int n, int i){
    int maior = i;
    int esq = 2*i + 1;
    int dir = 2*i + 2;

    if(esq < n && v[esq] > v[maior])
        maior = esq;
    if(dir < n && v[dir] > v[maior])
        maior = dir;
    if(maior != i){
        troca(&v[i], &v[maior]);
        sift(v, n, maior);
    }
}

void heapSort(int v[], int n){
    for(int i = n / 2 - 1; i >= 0; i--)
        sift(v, n, i);
    for(int i = n - 1; i >= 0; i--){
        troca(&v[0], &v[i]);
        sift(v, i, 0);
    }

}

int main() {
    int v[] = {50, 45, 89, 0, 128, 65};
    int n = sizeof(v)/ sizeof(v[0]);

    heapSort(v, n);

    imprimeVetor(v, n);

    return 0;
}