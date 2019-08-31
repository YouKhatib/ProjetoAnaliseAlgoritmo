#include <iostream>
using std::cout;
using std::endl;
using std::flush;

void merge(int v[], int esq, int  m, int dir){
    int *temp = new int[dir - esq + 1];//Vetor Temporario
    int i = esq, j = m + 1;//i é para a parte esquerda e j é par a parte direita
    int k = 0;//k é para o vetor temporario
    while(i <= m && j <= dir){
        if(v[i] <= v[j])
            temp[k++] = v[i++];
        else
            temp[k++] = v[j++];
    }
    //Resto dos elementos da metade esquerda
    while(i <= m)
        temp[k++] = v[i++];
    //Resto dos elementos da metade direita
    while(j <= dir)
        temp[k++] = v[j++];
    //Copia a matriz temporária após o merge para a original
    for(k = 0, i = esq; i <= dir; ++i, ++k)
        v[i] = temp[k];

    delete []temp;
}
void mergeSortHelper(int v[], int esq, int dir){
    int m;
    if(esq < dir){
        m = (esq + dir) >> 1;
        mergeSortHelper(v, esq, m);
        mergeSortHelper(v, m + 1, dir);
        merge(v, esq, m, dir);
    }
}
void mergeSort(int v[], int n){
    mergeSortHelper(v, 0, n - 1);
}

void imprimeVetor(int *array, int n) {
    for (int i = 0; i < n; ++i)
        cout << array[i] << " " << flush;
    cout << endl;
}


int main() {
    int v[] = {94, 42, 50, 95, 333, 65, 54, 456, 1, 1234};
    int n = sizeof(v) / sizeof(v[0]);

    cout << "Antes de ser ordenado pelo MergeSort :" << endl;
    imprimeVetor(v, n);

    mergeSort(v, n);

    cout << "Depois de ser ordenado pelo MergeSort :" << endl;
    imprimeVetor(v, n);
    return (0);
}