#ifndef QUARTOS_H
#define QUARTOS_H

#include <QDialog>

namespace Ui {
class Quartos;
}

class Quartos : public QDialog
{
    Q_OBJECT

public:
    explicit Quartos(QWidget *parent = nullptr);
    ~Quartos();

private slots:
    void on_pushButton_2_clicked();

private:
    Ui::Quartos *ui;
};

#endif // QUARTOS_H
