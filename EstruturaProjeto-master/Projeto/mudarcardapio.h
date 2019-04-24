#ifndef MUDARCARDAPIO_H
#define MUDARCARDAPIO_H

#include <QDialog>
#include "lde.h"

namespace Ui {
class mudarCardapio;
}

class mudarCardapio : public QDialog
{
    Q_OBJECT

public:
    explicit mudarCardapio(QWidget *parent = nullptr);
    ~mudarCardapio();

private slots:
    void on_pushButton_clicked();

    void on_pushButton_2_clicked();

    void on_pushButton_3_clicked();

    void on_pushButton_4_clicked();


private:
    Ui::mudarCardapio *ui;

public:
    lde getObj();
};

#endif // MUDARCARDAPIO_H
