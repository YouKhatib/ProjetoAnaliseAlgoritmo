/********************************************************************************
** Form generated from reading UI file 'mudarcardapio.ui'
**
** Created by: Qt User Interface Compiler version 5.13.0
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_MUDARCARDAPIO_H
#define UI_MUDARCARDAPIO_H

#include <QtCore/QVariant>
#include <QtWidgets/QApplication>
#include <QtWidgets/QDialog>
#include <QtWidgets/QLabel>
#include <QtWidgets/QLineEdit>
#include <QtWidgets/QPushButton>
#include <QtWidgets/QTextBrowser>

QT_BEGIN_NAMESPACE

class Ui_mudarCardapio
{
public:
    QPushButton *pushButton;
    QPushButton *pushButton_2;
    QPushButton *pushButton_3;
    QLineEdit *lineEdit;
    QLabel *label;
    QLineEdit *lineEdit_2;
    QLineEdit *lineEdit_3;
    QLabel *label_2;
    QLabel *label_3;
    QTextBrowser *textBrowser;
    QLabel *label_4;
    QPushButton *pushButton_4;

    void setupUi(QDialog *mudarCardapio)
    {
        if (mudarCardapio->objectName().isEmpty())
            mudarCardapio->setObjectName(QString::fromUtf8("mudarCardapio"));
        mudarCardapio->resize(400, 300);
        pushButton = new QPushButton(mudarCardapio);
        pushButton->setObjectName(QString::fromUtf8("pushButton"));
        pushButton->setGeometry(QRect(100, 120, 75, 23));
        pushButton_2 = new QPushButton(mudarCardapio);
        pushButton_2->setObjectName(QString::fromUtf8("pushButton_2"));
        pushButton_2->setGeometry(QRect(140, 250, 75, 23));
        pushButton_3 = new QPushButton(mudarCardapio);
        pushButton_3->setObjectName(QString::fromUtf8("pushButton_3"));
        pushButton_3->setGeometry(QRect(230, 10, 121, 23));
        lineEdit = new QLineEdit(mudarCardapio);
        lineEdit->setObjectName(QString::fromUtf8("lineEdit"));
        lineEdit->setGeometry(QRect(10, 250, 121, 20));
        label = new QLabel(mudarCardapio);
        label->setObjectName(QString::fromUtf8("label"));
        label->setGeometry(QRect(10, 270, 251, 20));
        lineEdit_2 = new QLineEdit(mudarCardapio);
        lineEdit_2->setObjectName(QString::fromUtf8("lineEdit_2"));
        lineEdit_2->setGeometry(QRect(20, 30, 151, 20));
        lineEdit_3 = new QLineEdit(mudarCardapio);
        lineEdit_3->setObjectName(QString::fromUtf8("lineEdit_3"));
        lineEdit_3->setGeometry(QRect(20, 90, 151, 20));
        label_2 = new QLabel(mudarCardapio);
        label_2->setObjectName(QString::fromUtf8("label_2"));
        label_2->setGeometry(QRect(20, 10, 101, 16));
        label_3 = new QLabel(mudarCardapio);
        label_3->setObjectName(QString::fromUtf8("label_3"));
        label_3->setGeometry(QRect(20, 70, 47, 13));
        textBrowser = new QTextBrowser(mudarCardapio);
        textBrowser->setObjectName(QString::fromUtf8("textBrowser"));
        textBrowser->setGeometry(QRect(190, 40, 201, 192));
        label_4 = new QLabel(mudarCardapio);
        label_4->setObjectName(QString::fromUtf8("label_4"));
        label_4->setGeometry(QRect(20, 230, 141, 16));
        pushButton_4 = new QPushButton(mudarCardapio);
        pushButton_4->setObjectName(QString::fromUtf8("pushButton_4"));
        pushButton_4->setGeometry(QRect(300, 260, 75, 23));

        retranslateUi(mudarCardapio);

        QMetaObject::connectSlotsByName(mudarCardapio);
    } // setupUi

    void retranslateUi(QDialog *mudarCardapio)
    {
        mudarCardapio->setWindowTitle(QCoreApplication::translate("mudarCardapio", "Dialog", nullptr));
        pushButton->setText(QCoreApplication::translate("mudarCardapio", "Adicionar", nullptr));
        pushButton_2->setText(QCoreApplication::translate("mudarCardapio", "Remover", nullptr));
        pushButton_3->setText(QCoreApplication::translate("mudarCardapio", "Atualizar Card\303\241pio", nullptr));
        label->setText(QCoreApplication::translate("mudarCardapio", "Para remover, digite o exato nome do prato", nullptr));
        label_2->setText(QCoreApplication::translate("mudarCardapio", "Nome do prato:", nullptr));
        label_3->setText(QCoreApplication::translate("mudarCardapio", "Pre\303\247o:", nullptr));
        label_4->setText(QString());
        pushButton_4->setText(QCoreApplication::translate("mudarCardapio", "Voltar", nullptr));
    } // retranslateUi

};

namespace Ui {
    class mudarCardapio: public Ui_mudarCardapio {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_MUDARCARDAPIO_H
