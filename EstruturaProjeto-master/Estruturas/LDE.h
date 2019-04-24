//
// Created by T-Gamer on 05/04/2019.
//

#ifndef HASH_LDE_H
#define HASH_LDE_H

#include <iostream>
#include "No.h"

using std::cout;
using std::endl;

template <typename T> class LDE{
        public:
        LDE(): primeiro(NULL), n(0){}

        void insere(T x){
            No<T>* novo = new No<T>;
            novo->val = x;
            novo->proximo = NULL;
            No<T>* anterior = NULL;
            No<T>* proximo = primeiro;

            while(proximo && proximo->val < x){
                anterior = proximo;
                proximo = proximo->proximo;
            }

            if(anterior)
                anterior->proximo = novo;
            else
                primeiro = novo;

            novo->proximo = proximo;
            n++;

        }

        No<T>* busca(T val){
            No<T>* atual = primeiro;
            while (atual && atual->val <= val){
                if(atual->val == val)
                    return atual;
                atual = atual->proximo;
            }
            return NULL;
        }

        void imprime(){
            No<T>* atual = primeiro;
            while(atual){
                cout << atual->val << " ";
                atual = atual->proximo;
            }
            cout << "\n";
        }

    bool remove(int valor) {
        No<T>* atual = primeiro;
        No<T>* anterior = NULL;
        int i;
        for (;atual != NULL && atual->val != valor ;) {
            anterior = atual;
            atual = atual->proximo;
        }

        if (atual == NULL || atual->val != valor)
            return false;

        if (anterior)
            anterior->proximo = atual->proximo;
        else
            primeiro = atual->proximo;

        delete atual;
        return true;
    }

        bool removeIndice(int idx) {
            No<T>* atual = primeiro;
            No<T>* anterior = NULL;
            int i;
            for (i = 0; i < idx && atual != NULL; i++) {
                anterior = atual;
                atual = atual->proximo;
            }
            if (atual == NULL)
                return false;
            if (anterior)
                anterior->proximo = atual->proximo;
            else
                primeiro = atual->proximo;

            delete atual;
            return true;
        }

        virtual ~LDE() {
            No<T>* atual = primeiro;
            No<T>* prox = NULL;
            while (atual) {
                prox = atual->proximo;
                delete atual;
                atual = prox;
            }
        }
        private:
        No<T>* primeiro;
        int n;

};

#endif //HASH_LDE_H
