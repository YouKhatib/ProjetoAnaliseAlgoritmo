//
// Created by unifkluca on 08/03/2019.
//

#ifndef LDDE_LDDE_H
#define LDDE_LDDE_H

#include <iostream>
#include "No.h"

using namespace std;

template<typename T> class LDDE{
public:
    LDDE(): primeiro(NULL), ultimo(NULL), n(0){}

    void insere(T x){
        No<T>* novo = new No<T>;
        novo->val = x;
        novo->proximo = NULL;
        novo->anterior = NULL;
        No<T>* ptrAnterior = NULL;
        No<T>* atual = primeiro;

        while(atual && atual->val < x){
            ptrAnterior = atual;
            atual = atual->proximo;
        }

        novo->anterior = ptrAnterior;
        novo->proximo = atual;

        if(ptrAnterior)
            ptrAnterior->proximo = novo;
        else
            primeiro = novo;

        if(atual){
            atual->anterior = novo;
        }

        if (novo->anterior == ultimo){
            ultimo = novo;
        }

        n++;
    }

    bool insere(const LDDE<T>& outra){
        No<T>* ptrOutra = outra.primeiro;

        while(ptrOutra){
            this->insere(ptrOutra->val);
            ptrOutra = p
        }
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

    void imprimeReverso(){
        No<T>* atual = ultimo;
        while(atual){
            cout << atual->val << " ";
            atual = atual->anterior;
        }
        cout << "\n";
    }

    bool remove(int idx) {
        No<T>* atual = primeiro;
        No<T>* anterior = NULL;

        int i;
        for (i = 0; i < idx && atual != NULL; i++) {
            anterior = atual;
            atual = atual->proximo;
        }
        if (atual == NULL)
            return false;
        if (anterior) {
            anterior->proximo = atual->proximo;
            atual->proximo->anterior = anterior;
        }else {
            primeiro = atual->proximo;
            atual->proximo->anterior = NULL;
        }

        delete atual;
        return true;
    }

    bool remove(No<T>* no){
        if(no == nullptr) {
            return false;
        }

        if (no == primeiro)
            primeiro = no->proximo;
        if (no == ultimo)
            ultimo = no->anterior;
        if (no->anterior)
            no->anterior->proximo = no->proximo;
        if (no->proximo)
            no->proximo->anterior = no->anterior;

        n--;
        delete no;
        return true;
    }

    virtual ~LDDE() {
        No<T> *atual = primeiro, *prox = NULL;
        while (atual) {
            prox = atual->proximo;
            delete atual;
            atual = prox;
        }
    }

    friend class No<T>;

private:
    No<T>* primeiro;
    No<T>* ultimo;
    int n;


};

#endif //LDDE_LDDE_H
