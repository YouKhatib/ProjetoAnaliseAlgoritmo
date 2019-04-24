//
// Created by unifkluca on 22/03/2019.
//

#ifndef FEC_FDC_H
#define FEC_FDC_H

#include "No.h"

template <typename T> class FDC {
public:

    FDC (): inicio(nullptr), fim(nullptr) {}

    bool enfileira(T n){
        No<T>* novo = new No<T>;
        novo->valor = n;
        novo->proximo = NULL;

        if(novo == NULL)
            return false;

        if(fim != NULL)
            fim->proximo = novo;


        fim = novo;

        if(!inicio)
            inicio = novo;

        return true;
    }

    bool desenfileira(T* ptr = NULL){
        if(inicio == NULL)
            return false;

        if(ptr)
            *ptr = inicio->valor;
        No<T>* prox = inicio->proximo;
        delete inicio;
        inicio = prox;
        return true;

    }

    void limpa(){
        No<T>* atual = inicio;
        No<T>* prox = NULL;

        while(atual){
            prox = atual->proximo;
            delete atual;
            atual = prox;
        }
    }

    virtual ~FDC() {
        this->limpa();
    }

    friend class No<T>;
private:
    No<T>* inicio;
    No<T>* fim;
};

#endif //FEC_FDC_H
