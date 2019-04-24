#ifndef CARDAPIO_H
#define CARDAPIO_H

#include <QDialog>
#include "lde.h"
#include "mudarcardapio.h"

namespace Ui {
class Cardapio;
}

class Cardapio : public QDialog
{
    Q_OBJECT

public:
    explicit Cardapio(QWidget *parent = nullptr);
    ~Cardapio();

private slots:
    void on_pushButton_clicked();

    void on_pushButton_2_clicked();

private:
    Ui::Cardapio *ui;
    mudarCardapio a;
};

#endif // CARDAPIO_H
