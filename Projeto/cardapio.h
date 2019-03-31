#ifndef CARDAPIO_H
#define CARDAPIO_H

#include <QDialog>

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

private:
    Ui::Cardapio *ui;
};

#endif // CARDAPIO_H
