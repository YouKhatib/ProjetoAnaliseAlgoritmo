//
// Created by unifkluca on 22/03/2019.
//

#ifndef FEC_FEC_H
#define FEC_FEC_H

#include <iostream>

using std::cout;
using std::endl;

template <typename T, int MAX> class FEC{
public:

    FEC (): inicio(0), fim(0) {}

    bool enfileira(T n){
        if( ((fim+1) % MAX) == inicio )
            return false;

        v[fim] = n;
        fim = (fim+1) % MAX;

        return true;
    }

    bool desenfileira(T* ptr = NULL){
        if(inicio == fim)
            return false;

        if(ptr != NULL)
            *ptr = v[inicio];

        inicio = (inicio + 1) % MAX;
        return true;

    }

    void imprime(){
        for(int i = inicio; i != fim; i = (i + 1) % MAX)
            cout << v[i] << " ";
        cout << endl;
    }

    void limpa() {
        inicio = fim = 0;
    }

private:
    int inicio, fim;
    T v[MAX];

};

#endif //FEC_FEC_H
