/********************************************************************************
** Form generated from reading UI file 'quartos.ui'
**
** Created by: Qt User Interface Compiler version 5.12.2
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_QUARTOS_H
#define UI_QUARTOS_H

#include <QtCore/QVariant>
#include <QtWidgets/QApplication>
#include <QtWidgets/QComboBox>
#include <QtWidgets/QDialog>
#include <QtWidgets/QLabel>
#include <QtWidgets/QPushButton>
#include <QtWidgets/QSpinBox>

QT_BEGIN_NAMESPACE

class Ui_Quartos
{
public:
    QComboBox *comboBox;
    QLabel *label;
    QLabel *label_2;
    QLabel *label_3;
    QPushButton *pushButton;
    QSpinBox *spinBox;
    QLabel *label_4;
    QPushButton *pushButton_2;

    void setupUi(QDialog *Quartos)
    {
        if (Quartos->objectName().isEmpty())
            Quartos->setObjectName(QString::fromUtf8("Quartos"));
        Quartos->resize(400, 300);
        comboBox = new QComboBox(Quartos);
        comboBox->addItem(QString());
        comboBox->addItem(QString());
        comboBox->addItem(QString());
        comboBox->addItem(QString());
        comboBox->addItem(QString());
        comboBox->addItem(QString());
        comboBox->addItem(QString());
        comboBox->setObjectName(QString::fromUtf8("comboBox"));
        comboBox->setGeometry(QRect(40, 20, 141, 22));
        label = new QLabel(Quartos);
        label->setObjectName(QString::fromUtf8("label"));
        label->setGeometry(QRect(40, 0, 47, 13));
        label_2 = new QLabel(Quartos);
        label_2->setObjectName(QString::fromUtf8("label_2"));
        label_2->setGeometry(QRect(40, 100, 91, 16));
        label_3 = new QLabel(Quartos);
        label_3->setObjectName(QString::fromUtf8("label_3"));
        label_3->setGeometry(QRect(120, 100, 47, 13));
        pushButton = new QPushButton(Quartos);
        pushButton->setObjectName(QString::fromUtf8("pushButton"));
        pushButton->setGeometry(QRect(50, 210, 75, 23));
        spinBox = new QSpinBox(Quartos);
        spinBox->setObjectName(QString::fromUtf8("spinBox"));
        spinBox->setGeometry(QRect(40, 70, 42, 22));
        label_4 = new QLabel(Quartos);
        label_4->setObjectName(QString::fromUtf8("label_4"));
        label_4->setGeometry(QRect(40, 50, 121, 16));
        pushButton_2 = new QPushButton(Quartos);
        pushButton_2->setObjectName(QString::fromUtf8("pushButton_2"));
        pushButton_2->setGeometry(QRect(220, 210, 75, 23));

        retranslateUi(Quartos);

        QMetaObject::connectSlotsByName(Quartos);
    } // setupUi

    void retranslateUi(QDialog *Quartos)
    {
        Quartos->setWindowTitle(QApplication::translate("Quartos", "Dialog", nullptr));
        comboBox->setItemText(0, QApplication::translate("Quartos", "Solteiro Padr\303\243o", nullptr));
        comboBox->setItemText(1, QApplication::translate("Quartos", "Duplo Solteiro Padr\303\243o", nullptr));
        comboBox->setItemText(2, QApplication::translate("Quartos", "Casal Padr\303\243o", nullptr));
        comboBox->setItemText(3, QApplication::translate("Quartos", "Solteiro Master", nullptr));
        comboBox->setItemText(4, QApplication::translate("Quartos", "Duplo Solteiro Master", nullptr));
        comboBox->setItemText(5, QApplication::translate("Quartos", "Casal Master", nullptr));
        comboBox->setItemText(6, QApplication::translate("Quartos", "Presidencial", nullptr));

        label->setText(QApplication::translate("Quartos", "Quartos", nullptr));
        label_2->setText(QApplication::translate("Quartos", "Pre\303\247o por noite", nullptr));
        label_3->setText(QString());
        pushButton->setText(QApplication::translate("Quartos", "Ok", nullptr));
        label_4->setText(QApplication::translate("Quartos", "Tempo de Estadia (Dias)", nullptr));
        pushButton_2->setText(QApplication::translate("Quartos", "Cancelar", nullptr));
    } // retranslateUi

};

namespace Ui {
    class Quartos: public Ui_Quartos {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_QUARTOS_H
