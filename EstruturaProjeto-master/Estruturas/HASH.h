//
// Created by T-Gamer on 04/04/2019.
//

#ifndef HASH_HASH_H
#define HASH_HASH_H

#include <iostream>
#include "LDE.h"

using namespace std;

template <typename T, int MAX> class HASH{
public:

    bool adiciona(T x){
        int i = x % MAX;
        if(v[i].busca(x)){
            cout << "Número já inserido" << endl;
            return false;
        }

        v[i].insere(x);

        return true;
    }

    bool expurga(T x){
        int i = x % MAX;
        if (!v[i].busca(x)){
            cout << "Número não encontrado, boçal" << endl;
            return false;
        } else {
            v[i].remove(x);

            return true;
        }
    }

    void imprime(){
        for (int i = 0; i < MAX; i++){
            v[i].imprime();
        }
    }

private:
    LDE<T> v[MAX];

};

#endif //HASH_HASH_H
