#ifndef JANELAPRINCIPAL_H
#define JANELAPRINCIPAL_H

#include <QDialog>

namespace Ui {
class JanelaPrincipal;
}

class JanelaPrincipal : public QDialog
{
    Q_OBJECT

public:
    explicit JanelaPrincipal(QWidget *parent = nullptr);
    ~JanelaPrincipal();

private slots:
    void on_pushButton_3_clicked();

    void on_pushButton_clicked();

    void on_pushButton_2_clicked();

private:
    Ui::JanelaPrincipal *ui;
};

#endif // JANELAPRINCIPAL_H
