//
// Created by unifkluca on 22/03/2019.
//

#ifndef FEC_NO_H
#define FEC_NO_H

template <typename T> class FDC;

template <typename T> class No{
public:
    friend class FDC<T>;

private:
    T valor;
    No<T>* proximo;

};

#endif //FEC_NO_H
