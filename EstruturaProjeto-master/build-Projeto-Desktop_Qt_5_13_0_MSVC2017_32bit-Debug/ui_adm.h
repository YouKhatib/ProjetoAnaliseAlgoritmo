/********************************************************************************
** Form generated from reading UI file 'adm.ui'
**
** Created by: Qt User Interface Compiler version 5.13.0
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_ADM_H
#define UI_ADM_H

#include <QtCore/QVariant>
#include <QtWidgets/QApplication>
#include <QtWidgets/QDialog>
#include <QtWidgets/QPushButton>

QT_BEGIN_NAMESPACE

class Ui_adm
{
public:
    QPushButton *pushButton;
    QPushButton *pushButton_2;
    QPushButton *pushButton_3;
    QPushButton *pushButton_4;

    void setupUi(QDialog *adm)
    {
        if (adm->objectName().isEmpty())
            adm->setObjectName(QString::fromUtf8("adm"));
        adm->resize(400, 300);
        pushButton = new QPushButton(adm);
        pushButton->setObjectName(QString::fromUtf8("pushButton"));
        pushButton->setGeometry(QRect(130, 140, 111, 23));
        pushButton_2 = new QPushButton(adm);
        pushButton_2->setObjectName(QString::fromUtf8("pushButton_2"));
        pushButton_2->setGeometry(QRect(130, 180, 111, 23));
        pushButton_3 = new QPushButton(adm);
        pushButton_3->setObjectName(QString::fromUtf8("pushButton_3"));
        pushButton_3->setGeometry(QRect(130, 220, 111, 23));
        pushButton_4 = new QPushButton(adm);
        pushButton_4->setObjectName(QString::fromUtf8("pushButton_4"));
        pushButton_4->setGeometry(QRect(130, 260, 111, 23));

        retranslateUi(adm);

        QMetaObject::connectSlotsByName(adm);
    } // setupUi

    void retranslateUi(QDialog *adm)
    {
        adm->setWindowTitle(QCoreApplication::translate("adm", "Dialog", nullptr));
        pushButton->setText(QCoreApplication::translate("adm", "Realizar checkout", nullptr));
        pushButton_2->setText(QCoreApplication::translate("adm", "Alterar card\303\241pio", nullptr));
        pushButton_3->setText(QCoreApplication::translate("adm", "Servi\303\247o de quarto", nullptr));
        pushButton_4->setText(QCoreApplication::translate("adm", "Voltar", nullptr));
    } // retranslateUi

};

namespace Ui {
    class adm: public Ui_adm {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_ADM_H
