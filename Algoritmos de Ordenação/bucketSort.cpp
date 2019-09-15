#include <iostream>
#include <vector>
#include <algorithm>

using std::cout;
using std::endl;
using std::vector;

void imprimeVetor(float v[], int n){
    for(int i = 0; i < n; i++)
        cout << v[i] << " ";
    cout << endl;
}

void bucketSort(float v[], int n){
    vector<float> b[n];

    for(int i = 0; i < n; i++){
        int bi = n*v[i];
        b[bi].push_back(v[i]);
    }

    for (int i=0; i<n; i++)
        sort(b[i].begin(), b[i].end());

    int index = 0;
    for (int i = 0; i < n; i++)
        for (int j = 0; j < b[i].size(); j++)
            v[index++] = b[i][j];

}

int main() {
    float v[] = {0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434};
    int n = sizeof(v)/ sizeof(v[0]);

    bucketSort(v, n);

    cout << "O vetor ordenado é: " << endl;
    imprimeVetor(v, n);

    return 0;

}