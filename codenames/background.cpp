#include "background.h"

TPCard::TPCard(const QPixmap &image, QGraphicsItem *parent)
 : QObject(), QGraphicsPixmapItem(image, parent), _offset(-image.width()/2, -image.height()/2), _pos() {
        setOffset(_offset);
}

TPCard::~TPCard() { }

void TPCard::setPosition(QPointF position) {
        _pos = position;
        setOffset(_pos + _offset);
}
QPointF TPCard::position() const { return _pos; }

