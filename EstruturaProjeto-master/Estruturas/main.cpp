#include <iostream>
#include "FEC.h"
#include "FDC.h"

using std::cout;

int testaFilaEstatica()
{
    FEC<int, 15> f;
    f.enfileira(5);
    f.enfileira(1);
    f.enfileira(7);
    f.enfileira(9);

    int x;
    while(f.desenfileira(&x)){
        cout << x << endl;
    }

    for(x=0; f.enfileira(x); x++);

    while(f.desenfileira(&x)){
        cout << x << endl;
    }

    return 0;
}

int testaFilaDinamica()
{
    FDC<int> f;
    f.enfileira(5);
    f.enfileira(1);
    f.enfileira(7);
    f.enfileira(9);

    int x;
    while(f.desenfileira(&x)){
        cout << x << endl;
    }

    for(x=0; x<15 ; x++)
        f.enfileira(x);

    while(f.desenfileira(&x)){
        cout << x << endl;
    }

    return 0;
}

int main(int argc, char *argv[]){
    return testaFilaEstatica() | testaFilaDinamica();
}
