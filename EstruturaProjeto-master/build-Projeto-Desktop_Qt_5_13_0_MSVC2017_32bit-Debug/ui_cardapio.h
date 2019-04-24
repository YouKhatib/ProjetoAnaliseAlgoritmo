/********************************************************************************
** Form generated from reading UI file 'cardapio.ui'
**
** Created by: Qt User Interface Compiler version 5.13.0
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_CARDAPIO_H
#define UI_CARDAPIO_H

#include <QtCore/QVariant>
#include <QtWidgets/QApplication>
#include <QtWidgets/QDialog>
#include <QtWidgets/QPushButton>
#include <QtWidgets/QTextBrowser>

QT_BEGIN_NAMESPACE

class Ui_Cardapio
{
public:
    QPushButton *pushButton;
    QTextBrowser *textBrowser;
    QPushButton *pushButton_2;

    void setupUi(QDialog *Cardapio)
    {
        if (Cardapio->objectName().isEmpty())
            Cardapio->setObjectName(QString::fromUtf8("Cardapio"));
        Cardapio->resize(400, 300);
        pushButton = new QPushButton(Cardapio);
        pushButton->setObjectName(QString::fromUtf8("pushButton"));
        pushButton->setGeometry(QRect(250, 260, 75, 23));
        textBrowser = new QTextBrowser(Cardapio);
        textBrowser->setObjectName(QString::fromUtf8("textBrowser"));
        textBrowser->setGeometry(QRect(60, 60, 256, 192));
        pushButton_2 = new QPushButton(Cardapio);
        pushButton_2->setObjectName(QString::fromUtf8("pushButton_2"));
        pushButton_2->setGeometry(QRect(120, 20, 121, 23));

        retranslateUi(Cardapio);

        QMetaObject::connectSlotsByName(Cardapio);
    } // setupUi

    void retranslateUi(QDialog *Cardapio)
    {
        Cardapio->setWindowTitle(QCoreApplication::translate("Cardapio", "Dialog", nullptr));
        pushButton->setText(QCoreApplication::translate("Cardapio", "Voltar", nullptr));
        pushButton_2->setText(QCoreApplication::translate("Cardapio", "Carregar Card\303\241pio", nullptr));
    } // retranslateUi

};

namespace Ui {
    class Cardapio: public Ui_Cardapio {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_CARDAPIO_H
