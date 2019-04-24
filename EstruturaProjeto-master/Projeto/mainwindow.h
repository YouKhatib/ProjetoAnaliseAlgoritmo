#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include "janelaprincipal.h"

namespace Ui {
class MainWindow;
}

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    explicit MainWindow(QWidget *parent = nullptr);
    ~MainWindow();

private slots:
    void on_logIn_clicked();



    void on_registrar_clicked();

private:
    Ui::MainWindow *ui;
};

#endif // MAINWINDOW_H
