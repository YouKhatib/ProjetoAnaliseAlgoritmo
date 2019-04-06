#ifndef REGISTRO_H
#define REGISTRO_H

#include <QDialog>
#include <string>

namespace Ui {
    class Registro;
}

class Registro : public QDialog
{
    Q_OBJECT

    public:
        explicit Registro(QWidget *parent = nullptr);
        ~Registro();

    private slots:
        void on_pushButton_clicked();

        void on_pushButton_2_clicked();

    private:
        Ui::Registro *ui;
};

#endif // REGISTRO_H
