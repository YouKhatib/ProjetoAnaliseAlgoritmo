#include<iostream>
using namespace std;

void flip(int v[], int i){
    int temp, start = 0;
    while (start < i){
        temp = v[start];
        v[start] = v[i];
        v[i] = temp;
        start++;
        i--;
    }
}

int encontraMaior(int v[], int n){
    int m, i;
    for (m = 0, i = 0; i < n; ++i)
        if (v[i] > v[m])
            m = i;
    return m;
}

void pancakeSort(int v[], int n){
    for (int tamAtual = n; tamAtual > 1; --tamAtual){
        int m = encontraMaior(v, tamAtual);

        if (m != tamAtual - 1){
            flip(v, m);
            flip(v, tamAtual - 1);

        }

    }

}

void imprimeVetor(int *v, int n){
    for (int i = 0; i < n; ++i)
        cout << v[i] << " ";
    cout << endl;
}

int main(){
    int arr[] = {23, 10, 20, 11, 12, 6, 7};
    int n = sizeof(arr)/sizeof(arr[0]);

    cout<<"O Vetor antes da ordenação "<<endl;
    imprimeVetor(arr, n);

    cout<<"O Vetor após a ordenação "<<endl;
    pancakeSort(arr, n);
    imprimeVetor(arr, n);

    return 0;
}
