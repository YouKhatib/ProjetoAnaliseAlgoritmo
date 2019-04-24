#ifndef ADM_H
#define ADM_H

#include <QDialog>

namespace Ui {
class adm;
}

class adm : public QDialog
{
    Q_OBJECT

public:
    explicit adm(QWidget *parent = nullptr);
    ~adm();

private slots:
    void on_pushButton_4_clicked();

    void on_pushButton_2_clicked();

private:
    Ui::adm *ui;
};

#endif // ADM_H
