/********************************************************************************
** Form generated from reading UI file 'registro.ui'
**
** Created by: Qt User Interface Compiler version 5.13.0
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_REGISTRO_H
#define UI_REGISTRO_H

#include <QtCore/QVariant>
#include <QtWidgets/QApplication>
#include <QtWidgets/QDialog>
#include <QtWidgets/QLabel>
#include <QtWidgets/QLineEdit>
#include <QtWidgets/QPushButton>

QT_BEGIN_NAMESPACE

class Ui_Registro
{
public:
    QLineEdit *lineEdit;
    QLineEdit *lineEdit_2;
    QLineEdit *lineEdit_3;
    QLineEdit *lineEdit_4;
    QLineEdit *lineEdit_5;
    QLabel *label;
    QLabel *label_2;
    QLabel *label_3;
    QLabel *label_4;
    QLabel *label_5;
    QPushButton *pushButton;
    QPushButton *pushButton_2;

    void setupUi(QDialog *Registro)
    {
        if (Registro->objectName().isEmpty())
            Registro->setObjectName(QString::fromUtf8("Registro"));
        Registro->resize(400, 300);
        lineEdit = new QLineEdit(Registro);
        lineEdit->setObjectName(QString::fromUtf8("lineEdit"));
        lineEdit->setGeometry(QRect(100, 40, 113, 20));
        lineEdit_2 = new QLineEdit(Registro);
        lineEdit_2->setObjectName(QString::fromUtf8("lineEdit_2"));
        lineEdit_2->setGeometry(QRect(100, 80, 113, 20));
        lineEdit_3 = new QLineEdit(Registro);
        lineEdit_3->setObjectName(QString::fromUtf8("lineEdit_3"));
        lineEdit_3->setGeometry(QRect(100, 120, 113, 20));
        lineEdit_4 = new QLineEdit(Registro);
        lineEdit_4->setObjectName(QString::fromUtf8("lineEdit_4"));
        lineEdit_4->setGeometry(QRect(100, 160, 113, 20));
        lineEdit_5 = new QLineEdit(Registro);
        lineEdit_5->setObjectName(QString::fromUtf8("lineEdit_5"));
        lineEdit_5->setGeometry(QRect(100, 200, 113, 20));
        label = new QLabel(Registro);
        label->setObjectName(QString::fromUtf8("label"));
        label->setGeometry(QRect(50, 40, 47, 13));
        label_2 = new QLabel(Registro);
        label_2->setObjectName(QString::fromUtf8("label_2"));
        label_2->setGeometry(QRect(60, 80, 47, 13));
        label_3 = new QLabel(Registro);
        label_3->setObjectName(QString::fromUtf8("label_3"));
        label_3->setGeometry(QRect(10, 110, 81, 21));
        label_4 = new QLabel(Registro);
        label_4->setObjectName(QString::fromUtf8("label_4"));
        label_4->setGeometry(QRect(40, 160, 47, 13));
        label_5 = new QLabel(Registro);
        label_5->setObjectName(QString::fromUtf8("label_5"));
        label_5->setGeometry(QRect(40, 200, 47, 13));
        pushButton = new QPushButton(Registro);
        pushButton->setObjectName(QString::fromUtf8("pushButton"));
        pushButton->setGeometry(QRect(60, 250, 75, 23));
        pushButton_2 = new QPushButton(Registro);
        pushButton_2->setObjectName(QString::fromUtf8("pushButton_2"));
        pushButton_2->setGeometry(QRect(220, 250, 75, 23));

        retranslateUi(Registro);

        QMetaObject::connectSlotsByName(Registro);
    } // setupUi

    void retranslateUi(QDialog *Registro)
    {
        Registro->setWindowTitle(QCoreApplication::translate("Registro", "Dialog", nullptr));
        label->setText(QCoreApplication::translate("Registro", "Usu\303\241rio", nullptr));
        label_2->setText(QCoreApplication::translate("Registro", "Senha", nullptr));
        label_3->setText(QCoreApplication::translate("Registro", "Confirmar Senha", nullptr));
        label_4->setText(QCoreApplication::translate("Registro", "Nome", nullptr));
        label_5->setText(QCoreApplication::translate("Registro", "E-mail", nullptr));
        pushButton->setText(QCoreApplication::translate("Registro", "Voltar", nullptr));
        pushButton_2->setText(QCoreApplication::translate("Registro", "Registrar", nullptr));
    } // retranslateUi

};

namespace Ui {
    class Registro: public Ui_Registro {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_REGISTRO_H
