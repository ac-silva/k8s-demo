### K8S cluster demo

##### Commands to start the cluster

````sh
kubectl apply -f kubernetes-files/namespace.yaml,kubernetes-files/api-deployment.yaml,kubernetes-files/api-service.yaml,kubernetes-files/consumer-pod.yaml,kubernetes-files/db-deployment.yaml,kubernetes-files/db-service.yaml,kubernetes-files/init-kafka-deployment.yaml,kubernetes-files/kafka.yaml,kubernetes-files/kubernetes-dashboard.yaml --force

kubectl apply -f https://raw.githubusercontent.com/tonanuvem/k8s-exemplos/master/dashboard_permission.yml

kubectl proxy --port=8001 

````


[http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#/deployment?namespace=my-app](http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#/deployment?namespace=my-app)