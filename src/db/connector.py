# TODO: Instantiate connection pool to DB
#  Provide single connection instance to rest of application


# import uuid
#
# from sqlalchemy.dialects.postgresql import UUID
# from sqlalchemy.ext.declarative import declarative_base
# from sqlalchemy.orm import relationship
# from sqlalchemy.orm import sessionmaker
# from sqlalchemy import create_engine
# from sqlalchemy import Column, ForeignKey, Integer, String

# base = declarative_base()
#
#
# class User(base):
#     __tablename__ = 'user'
#
#     id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, unique=True, nullable=False)
#     name = Column(String(250), nullable=False)
#
#
# class Address(base):
#     __tablename__ = 'address'
#
#     id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, unique=True, nullable=False)
#     post_code = Column(String(250), nullable=False)
#
#     user_id = Column(Integer, ForeignKey('user.id'))
#     user = relationship(User)
#
#
# engine = create_engine("postgresql://{}:{}@{}/{}".format(
#     os.environ["POSTGRES_USER"],
#     os.environ["POSTGRES_PASSWORD"],
#     os.environ["POSTGRES_HOST"],
#     os.environ["POSTGRES_DB"]
# ), echo=True)
#
# base.metadata.create_all(engine)
# db_Session = sessionmaker(bind=engine)
# session = db_Session()
#
# new_user = User(name="Jack Black")
# session.add(new_user)
# session.commit()
#
# new_address = Address(post_code="4101", user=new_user)
# session.add(new_address)
# session.commit()
