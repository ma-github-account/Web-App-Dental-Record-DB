from rest_framework import serializers
from dental.models import Patient



class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.tooth1 = validated_data.get('tooth1', instance.tooth1)
        instance.tooth2 = validated_data.get('tooth2', instance.tooth2)
        instance.tooth3 = validated_data.get('tooth3', instance.tooth3)
        instance.tooth4 = validated_data.get('tooth4', instance.tooth4)
        instance.tooth5 = validated_data.get('tooth5', instance.tooth5)
        instance.tooth6 = validated_data.get('tooth6', instance.tooth6)
        instance.tooth7 = validated_data.get('tooth7', instance.tooth7)
        instance.tooth8 = validated_data.get('tooth8', instance.tooth8)
        instance.tooth9 = validated_data.get('tooth9', instance.tooth9)
        instance.tooth10 = validated_data.get('tooth10', instance.tooth10)
        instance.tooth11 = validated_data.get('tooth11', instance.tooth11)
        instance.tooth12 = validated_data.get('tooth12', instance.tooth12)
        instance.tooth13 = validated_data.get('tooth13', instance.tooth13)
        instance.tooth14 = validated_data.get('tooth14', instance.tooth14)
        instance.tooth15 = validated_data.get('tooth15', instance.tooth15)
        instance.tooth16 = validated_data.get('tooth16', instance.tooth16)
        instance.tooth17 = validated_data.get('tooth17', instance.tooth17)
        instance.tooth18 = validated_data.get('tooth18', instance.tooth18)
        instance.tooth19 = validated_data.get('tooth19', instance.tooth19)
        instance.tooth20 = validated_data.get('tooth20', instance.tooth20)
        instance.tooth21 = validated_data.get('tooth21', instance.tooth21)
        instance.tooth22 = validated_data.get('tooth22', instance.tooth22)
        instance.tooth23 = validated_data.get('tooth23', instance.tooth23)
        instance.tooth24 = validated_data.get('tooth24', instance.tooth24)
        instance.tooth25 = validated_data.get('tooth25', instance.tooth25)
        instance.tooth26 = validated_data.get('tooth26', instance.tooth26)
        instance.tooth27 = validated_data.get('tooth27', instance.tooth27)
        instance.tooth28 = validated_data.get('tooth28', instance.tooth28)
        instance.tooth29 = validated_data.get('tooth29', instance.tooth29)
        instance.tooth30 = validated_data.get('tooth30', instance.tooth30)
        instance.tooth31 = validated_data.get('tooth31', instance.tooth31)
        instance.tooth32 = validated_data.get('tooth32', instance.tooth32)
        instance.save()

        return instance




























